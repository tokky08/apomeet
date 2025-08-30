# EmailJS セットアップ手順

フォームから直接Gmailに送信するため、EmailJSの設定が必要です。

## 1. EmailJSアカウント作成
1. https://www.emailjs.com/ にアクセス
2. 「Sign Up」でアカウント作成
3. Gmailアカウントでログイン可能

## 2. サービス設定
1. ダッシュボードで「Add New Service」
2. 「Gmail」を選択
3. `apomeet.jp@gmail.com` でGmail連携
4. サービスIDをコピー（例：service_abc123）

## 3. テンプレート作成
1. 「Email Templates」→「Create New Template」
2. 以下の内容で設定：

**件名：** アポミート無料相談のお申し込み

**本文：**
```
お名前: {{name}}
年齢: {{age}}
ご職業: {{occupation}}
マッチングアプリ経験: {{experience}}

ご要望・ご質問:
{{message}}

---
このメールはアポミートのお問い合わせフォームから送信されました。
```

3. テンプレートIDをコピー（例：template_xyz789）

## 4. script.js の更新
以下の行を実際のIDに変更：
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

↓

```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## 5. Public Key設定
1. EmailJSダッシュボードの「Account」→「General」
2. Public Key をコピー
3. script.js の最初に追加：
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

設定完了後、フォーム送信で直接Gmailに届きます。