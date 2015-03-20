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
        responseModel =
          sampleJSON: JSON.stringify(@model.responseSchema.getSampleValue({}, {}), null, 2)
          isParam: false
          signature: getStringSignature(@model.responseSchema.schema)
        responseModelView = new SignatureView({model: responseModel, tagName: 'div'})
        $('.model-signature', @$el).append responseModelView.render().el
        # $('.model-signature', @$el).html ''
    @

  template: ->
    Handlebars.templates.status_code

