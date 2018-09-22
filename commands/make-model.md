# Make Model

### Command
```bash
php artisan laraset:model [name]
```

<div class="console-containter">
    Example :
<pre class="console-code">
<m>$ </m><code>php artisan <span class="code">laraset:model</span> Product</code>
<m>$ </m><code class="question"><span class="success">For Which Unit ?</span></code>
<m>  </m><code><span>[0] Product</span></code>
<m>> </m><code>Product <span class="comment">#or unit index in this case is : 0</span></code>
<m>$ </m><code><span class="info">[Product] Model created successfully</span></code>
<m>$ </m><code>_</code>
</pre>
</div>
Model :

```php
namespace App\Laraset\units\Product\Database\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
}
```
:::tip Model File Location
each unit Has his own Model files within `Laraset/units/Product/Database/Models` directory
:::