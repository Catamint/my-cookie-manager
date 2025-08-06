package com.example.cookieplugin;

import android.webkit.CookieManager;
import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.JSObject;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CookieManager")
public class CookieManagerPlugin extends Plugin {

    @PluginMethod
    public void getCookies(PluginCall call) {
        String url = call.getString("url");
        if (url == null || url.isEmpty()) {
            call.reject("url parameter is required");
            return;
        }

        CookieManager cookieManager = CookieManager.getInstance();
        String cookies = cookieManager.getCookie(url);
        if (cookies == null) {
            cookies = "";
        }

        Log.d("MyCookieManager", "Cookies for " + url + ": " + cookies);

        JSObject ret = new JSObject();
        
        ret.put("cookies", cookies);
        call.resolve(ret);
    }
}
