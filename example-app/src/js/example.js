import { CookieManager } from '@catamint/my-cookie-manager';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CookieManager.echo({ value: inputValue })
}
