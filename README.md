# hexo-tag-text-emphasis

Hexoに傍点（圏点）を打つタグを追加するプラグインです。
CSS3の`text-emphasis`プロパティを利用しています。

[Can I use - text-emphasis](http://caniuse.com/#feat=text-emphasis)

## 書式

```
{% text_emphasis [style] %}テキスト{% endtext_emphasis %}
```

`style`は省略可能です。  
`text-emphasis-style` CSSプロパティに渡す[キーワード値](https://developer.mozilla.org/ja/docs/Web/CSS/text-emphasis-style)、
もしくは一文字の文字列を指定してください。

キーワード値ではなく、かつ一文字ではない文字列を与えた場合無視されます。
また、白塗りと黒塗りを同時に指定したり、
複数の形状を同時に指定した場合、先に指定されたものが使用されます。

## config

デフォルトでは以下の値に設定されています。

```yaml
text_emphasis
  inline_style: true
```

### inline_style

傍点をインラインスタイルであてます。
自前でCSSを別途用意する場合は`false`にしてください。

---

## 例

```
{% text_emphasis %}テキスト{% endtext_emphasis %}
{% text_emphasis filled dot %}テキスト{% endtext_emphasis %}
{% text_emphasis open triangle %}テキスト{% endtext_emphasis %}
{% text_emphasis * %}テキスト{% endtext_emphasis %}
{% text_emphasis 🙂 %}テキスト{% endtext_emphasis %}
```

以下の通りに出力されます。

```
<em class="text-emphasis sesame" style="font-style: inherit; text-emphasis-style: sesame;">テキスト</em>
<em class="text-emphasis filled dot" style="font-style: inherit; text-emphasis-style: filled dot;">テキスト</em>
<em class="text-emphasis open triangle" style="font-style: inherit; text-emphasis-style: open triangle;">テキスト</em>
<em class="text-emphasis '*'" style="font-style: inherit; text-emphasis-style: '*';">テキスト</em>
<em class="text-emphasis '🙂'" style="font-style: inherit; text-emphasis-style: '🙂';">テキスト</em>
```

各`<em>`タグには「text-emphasis」クラスと
傍点の種類に応じたクラスが付与されます。
傍点の種類に応じて付与されるクラスは、
傍点の`text-emphasis-style`と同じ値になります。

`inject_style`が`false`の場合、インラインスタイルが指定されなくなります。
各自でスタイルをあててください。

---

## License

Licensed under the [MIT](LICENSE).
