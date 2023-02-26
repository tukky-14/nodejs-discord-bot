# Discord の Bot 作成

1. Discord の Developer Portal でアカウントを作成し、新しいアプリケーションを作成
2. Bot アカウントを作成するために、アプリケーションの「Bot」タブに移動して、Bot を追加
3. アプリケーションの「Bot」タブから Bot の【トークン】を取得
4. アプリケーションの「Auth2」で SCOPES の"bot"を選択、任意の権限を選択し、生成された URL にアクセス
5. URL のアクセス先で Bot を追加するサーバーを指定
6. 送信先の【チャンネル ID】 を取得
    - URL の一番末尾の数字がチャンネル ID
7. .env ファイルを作成し、【トークン】と【チャンネル ID】 を設定してファイルを実行
    ```
    DISCORD_TOKEN=【トークン】
    DISCORD_CHANNEL_ID=【チャンネル ID】
    ```
