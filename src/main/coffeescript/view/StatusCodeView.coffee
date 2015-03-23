class StatusCodeView extends Backbone.View
  initialize: ->

  render: ->
    template = @template()
    $(@el).html(template(@model))

    if swaggerUi.api.models.hasOwnProperty @model.responseModel
      responseModel =
        sampleJSON: JSON.stringify(swaggerUi.api.models[@model.responseModel].createJSONSample(), null, 2)
        isParam: false
        signature: swaggerUi.api.models[@model.responseModel].getMockSignature()
      responseModelView = new SignatureView({model: responseModel, tagName: 'div'})
      $('.model-signature', @$el).append responseModelView.render().el
    else
      # Outsystems change: show example of non object types
      if @model.responseSchema
        sampleJSON = @model.responseSchema.getSampleValue({}, {})
        if sampleJSON == null
          sampleJSON = ""
        else if @model.produces.length > 0 and @model.produces[0] == "application/octet-stream"
          sampleJSON = "binary"
        else if not (@model.produces.length > 0 and @model.produces[0] == "text/plain")
          sampleJSON = JSON.stringify(sampleJSON, null, 2)
        responseModel =
          sampleJSON: sampleJSON
          isParam: false
          signature: ""
          #signature: getStringSignature(@model.responseSchema.schema)
        responseModelView = new SignatureView({model: responseModel, tagName: 'div'})
        $('.model-signature', @$el).append responseModelView.render().el
        # $('.model-signature', @$el).html ''
    @

  template: ->
    Handlebars.templates.status_code

