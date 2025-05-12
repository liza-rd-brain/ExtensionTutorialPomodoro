"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarProvider = void 0;
class SidebarProvider {
    _view; // Здесь будет храниться ссылка на вебвью
    // Этот метод вызывается, когда VS Code создаёт вебвью
    resolveWebviewView(webviewView) {
        this._view = webviewView; // Сохраняем ссылку на вебвью
        webviewView.webview.html = this._getHtmlForWebview(); // Загружаем HTML
    }
    // Генерируем HTML, который будет отображаться в вебвью (взято с официального источника для примера)
    _getHtmlForWebview() {
        return `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Cat Coding</title>
                </head>
                <body>
                    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
                </body>
            </html>`;
    }
}
exports.SidebarProvider = SidebarProvider;
//# sourceMappingURL=SidebarProvider.js.map