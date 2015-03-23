class ResponseContentTypeView extends Backbone.View
  initialize: ->

  render: ->
    template = @template()

    $(@el).html(template(@model))
    
# OutSystems change: Removed label from ResponseContentType
    @

  template: ->
    Handlebars.templates.response_content_type
