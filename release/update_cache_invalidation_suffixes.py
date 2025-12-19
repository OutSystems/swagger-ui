from pathlib import Path
import re
import hashlib

TARGET = "dist/index.html"
TARGET = Path(__file__).parent.parent / TARGET


class FileWithHash:

    def __init__(self, path: Path):
        self.path = path
        with open(path, 'rb') as f:
            content = f.read()
        self.hash = hashlib.md5(content).hexdigest()[:8]
        self.name = path.name

    def __repr__(self):
        return f"Path: {self.path}, Name: {self.name}, Hash: {self.hash}"


def get_files_with_hash() -> list[Path]:
    base_path = TARGET.parent
    return [
        FileWithHash(path)
        for path in base_path.rglob('*') if path.is_file()
    ]


def invalidate_cache() -> None:
    """
    Goes to TARGET file and updates all references to files from "file.ext" to "file.ext?v=hash"
    """
    print(f"\n\033[93mRunning Python script to update cache invalidation suffixes...\033[00m")
    try:
        with open(TARGET, 'r', encoding='utf-8') as f:
            content = f.read()

            for file in get_files_with_hash():
                old = rf"{re.escape(file.name)}(\?[^\"'\s>]*)?"
                new = f"{file.name}?v={file.hash}"
                content = re.sub(old, new, content)

        with open(TARGET, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\033[92mCache invalidation suffixes updated successfully\033[00m\n")

    except FileNotFoundError:
        print(f"\033[91mError: Target file '{TARGET}' not found.\033[00m\n")
    except Exception as e:
        print(f"\033[91mAn unexpected error occurred: {e}\033[00m\n")


if __name__ == "__main__":
    invalidate_cache()
