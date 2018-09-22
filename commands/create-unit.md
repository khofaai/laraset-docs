# Create unit

[[toc]]

### Command 

```bash
php artisan laraset:unit [name]
```

### Options

- _`-` : required_ <br>
- _`default` : this option does't need a value when called_ 

| Option | Default Value | Description |
| --- | --- | --- |
|`name` 		| - 		| Unit name  |
|`--no-sync` 	| 'default' | To not synchronize global router with this components router |
|`--tpl` 		| 'default' | To create own blade template for this unit |
|`--with-admin` | 'default' | Generate elements for admin interface |
|`--model` 		| 'default' | If model is need with creation set name for it  |
|`--migrate` 	| 'default' | If migration is need with creation set name for it |



```bash
php artisan laraset:unit [name] --tpl=bladeName --no-sync --with-admin --model --migrate
```

### Example 

<div class="console-containter">
<pre class="console-code">
<m>$ </m><code>php artisan <span class="code">laraset:unit</span> Product</code>
<m>$ </m><code><span class="success">[directories] : finished</span></code>
<m>$ </m><code><span class="info">[Product] unit created successfully</span></code>
<m>$ </m><code>_</code>
</pre>
</div>