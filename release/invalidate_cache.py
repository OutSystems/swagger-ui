from pathlib import Path
import re
import hashlib

TARGET = "dist/index.html"
TARGET = Path(__file__).parent.parent / TARGET


class FileWithHash:

    def __init__(self, path: Path):
        self.path = path
        with open(path, 'rb') as file:
            content = file.read()
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
    with open(TARGET, 'r', encoding='utf-8') as file:
        content = file.read()

        for file in get_files_with_hash():
            old = rf"{re.escape(file.name)}(\?[^\"'\s>]*)?"
            new = f"{file.name}?v={file.hash}"
            content = re.sub(old, new, content)

    with open(TARGET, 'w', encoding='utf-8') as file:
        file.write(content)


if __name__ == "__main__":
    print(f"\n\033[93m Running Python script... \033[00m")
    invalidate_cache()
    print(f"\033[92m Cache invalidated successfully \033[00m\n")
