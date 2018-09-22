# Delete unit 
This command allow you to delete `Laraset` unit with double check
- select unit
- `yes` to confirm delete action

### Command
```
php artisan laraset:delete
```

<div class="console-containter">
    Example :
<pre class="console-code">
<m>$ </m><code>php artisan <span class="code">laraset:unit -d</span></code>
<m>$ </m><code class="question"><span class="success">Which Unit ?</span></code>
<m>  </m><code><span>[0] Product</span></code>
<m>> </m><code>Product</code>
<m>$ </m><code class="question"><span class="success">Confirm delete action for [Product] unit (yes/no) :</span></code>
<m>> </m><code>yes</code>
<m>$ </m><code>_</code>
</pre>
</div>

:::danger 
This Action is irreversable, you can't get back deleted units
:::
