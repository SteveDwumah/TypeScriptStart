function displayBrowserInfo() {
    const browserName = navigator.userAgent.includes("Firefox") ? "Firefox" :
                        navigator.userAgent.includes("Chrome") ? "Chrome" :
                        navigator.userAgent.includes("Safari") ? "Safari" :
                        navigator.userAgent.includes("Edge") ? "Edge" :
                        "Unbekannt";

    const osArchitecture = window.navigator.platform.includes("64") ? "64-Bit" : "32-Bit";
    const browserVersion = navigator.userAgent
    const windowResolution = `${window.screen.width} x ${window.screen.height}`;
    const documentWidth = document.documentElement.clientWidth;
    const documentHeight = document.documentElement.clientHeight;
    const colorDepth = window.screen.colorDepth;
    const pixelDepth = window.screen.pixelDepth;


    const infoContainer = document.createElement("div");
    infoContainer.innerHTML = `
        <h1>BOM elements</h1>
        <p><strong>Browsername:</strong> ${browserName}</p>
        <p><strong>Betriebssystem-Architektur:</strong> ${osArchitecture}</p>
        <p><strong>Browser-Version:</strong> ${browserVersion}</p>
        <p><strong>Window Auflösung:</strong> ${windowResolution}</p>
        <p><strong>Innere Breite des Dokuments:</strong> ${documentWidth}px</p>
        <p><strong>Dokument Innenhöhe:</strong> ${documentHeight}px</p>
        <p><strong>Color Depth:</strong> ${colorDepth}</p>
        <p><strong>Pixel Depth:</strong> ${pixelDepth}</p>
    `;

    document.body.appendChild(infoContainer);
}

window.onload = displayBrowserInfo;