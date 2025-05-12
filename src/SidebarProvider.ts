import * as vscode from 'vscode';

export class SidebarProvider implements vscode.WebviewViewProvider {
    private _view?: vscode.WebviewView; // Здесь будет храниться ссылка на вебвью


    // Этот метод вызывается, когда VS Code создаёт вебвью
    public resolveWebviewView(webviewView: vscode.WebviewView) {
        this._view = webviewView; // Сохраняем ссылку на вебвью
        webviewView.webview.html = this._getHtmlForWebview(); // Загружаем HTML
    }

    // Генерируем HTML, который будет отображаться в вебвью (взято с официального источника для примера)
    private _getHtmlForWebview() {
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



