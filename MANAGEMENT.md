# 名刺管理マニュアル

名刺の追加、編集、削除は `src/data/cards.json` を編集することで行えます。

## JSONの構造

`cards.json` は名刺オブジェクトの配列です。各オブジェクトは以下のプロパティを持ちます。

| プロパティ | 説明 | 例 |
| :--- | :--- | :--- |
| `id` | ユニークなID（他のカードと重複しないこと） | `"user_123"` |
| `name` | ユーザー名 | `"山田 太郎"` |
| `userId` | ユーザーID（表示用） | `"@yamada_taro"` |
| `genre` | カテゴリ名（フィルタリングに使用） | `"Tech"`, `"Creative"`, `"Business"` |
| `image` | 画像ファイルへのパス（`/src/assets/cards/` 内） | `"/src/assets/cards/my_photo.png"` |
| `description` | ホバー時に表示される説明文 | `"エンジニアとして活動しています。"` |

## 新規追加の手順

1. **画像を配置する**
   使用したい画像ファイルを `src/assets/cards/` フォルダの中に保存します。

2. **JSONを編集する**
   `src/data/cards.json` を開き、末尾に新しいオブジェクトを追加します。

   ```json
   {
     "id": "new_user",
     "name": "新規 ユーザー",
     "userId": "@new_user_id",
     "genre": "Tech",
     "image": "/src/assets/cards/your_image.png",
     "description": "ここに説明文を記述します。"
   }
   ```

3. **保存する**
   ファイルを保存すると、ブラウザで開いているサイトに自動的に反映されます。

## 注意事項
- JSONの形式（カンマ、波括弧、引用符）が崩れるとエラーになるため、構文を崩さないように注意してください。
- `genre` に新しい名前を入れると、サイト上のフィルターボタンも自動的に作成されます。
