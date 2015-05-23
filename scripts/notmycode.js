getMaxId = function(t) {
        return t[t.length - 1].id
    }, loadContent = function() {
        plugin.settings.clientID && plugin.settings.username ? el.each(function() {


            t.ajax({
            type: "GET",
            url: "https://api.instagram.com/v1/users/search?q=" + 
            plugin.settings.username + "&client_id=" + plugin.settings.clientID + "&callback=?",dataType: "jsonp",success: function(e) {
                    if (e.data.length)
                        for (var n = 0; n < e.data.length; n++) {
                            var i = e.data[n];
                            if (i.username === plugin.settings.username) {
                                var s = "https://api.instagram.com/v1/users/" + i.id + "/media/recent/?client_id=" + plugin.settings.clientID + "&count=" + plugin.settings.limit + "&callback=?";
                                s += plugin.settings.max_id ? "&max_id=" + plugin.settings.max_id : "", t.ajax({type: "GET",url: s,dataType: "jsonp",success: function(t) {
                                        if (200 === t.meta.code && t.data.length) {
                                            for (var e = 0; e < t.data.length; e++) {
                                                var n = t.data[e];
                                                if ("image" === n.type) {
                                                    var i = '<img src="' + n.images.standard_resolution.url + '" alt="Instagram Image" data-filter="' + n.filter + '" />';
                                                    if (plugin.settings.urls)
                                                        var i = '<a href="' + n.link + '" target="_blank">' + i + "</a>";
                                                    if (plugin.settings.list)
                                                        var i = "<li>" + i + "</li>";
                                                    el.append(i)
                                                }
                                            }
                                            plugin.settings.max_id = self.getMaxId(t.data), plugin.settings.success.call(this)
                                        } else
                                            plugin.settings.error.call(this, t.meta.code, t.meta.error_message)
                                    },error: function() {
                                        plugin.settings.error.call(this)
                                    }});
                                break
                            }
                        }
                    else
                        plugin.settings.error.call(this)
                },error: function() {
                    plugin.settings.error.call(this)
                }})
        }) : console.log("Both a client ID and username are required to use this plugin.")