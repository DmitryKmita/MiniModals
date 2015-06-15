/**
 * Author: Dmitry Kmita <dmitry@kmita.ru>
 *
 * Under MIT Licence
 *
 * Custom Modal Library for easy modal usage
 */
var modal = {
    currentContent: '',
    openAjaxModal: function(url, data, trigger) {
        var me = this;
        me._sendRequest(url, data, function(response){
            if (response.success) {
                me.currentContent = response.content;
                me._initModal();
                trigger();
            }
        });
    },
    openModal: function(text) {
        var me = this;
        if (text !== undefined) {
            me.currentContent = text;
        }
        me._initModal();
        me._bindButtons();
    },
    _sendRequest: function (url, data, success) {
        var request = $.ajax({
            url: url,
            type: "POST",
            async: true,
            data: data,
            dataType: "json"
        });
        request.done(success);
    },
    _bindButtons: function () {
        var me = this;
        $("#modal-window .close").click(function () {
            me.closeModal();
        });
    },
    closeModal: function () {
        var me = this;
        me._removeWindow();
        me._removeOverlay();
    },
    _initModal: function() {
        var me = this;
        me._initOverlay();
        me._initWindow();
    },
    _initOverlay: function() {
        if ($("#modal-overlay").length == 0) {
            $("body").prepend('<div id="modal-overlay"></div>');
        }
    },
    _removeOverlay: function() {
        $("#modal-overlay").remove();
    },
    _initWindow: function() {
        var me = this;
        if ($("#modal-overlay").length == 0) {
            me._initOverlay();
        }
        $("body").prepend('<div id="modal-window"><div class="close"><i class="fa fa-close"></i></div>'+me.currentContent+'</div>');
    },
    _removeWindow: function() {
        $("#modal-window").remove();
    }
};