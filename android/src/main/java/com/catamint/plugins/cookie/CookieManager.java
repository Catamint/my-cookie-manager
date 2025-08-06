package com.catamint.plugins.cookie;

import com.getcapacitor.Logger;

public class CookieManager {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
