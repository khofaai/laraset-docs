# Make Controller

### Command
```bash
php artisan laraset:controller [name]
```

<div class="console-containter">
    Example :
<pre class="console-code">
<m>$ </m><code>php artisan <span class="code">laraset:controller</span> Product</code>
<m>$ </m><code class="question"><span class="success">For Which Unit ?</span></code>
<m>  </m><code><span>[0] Product</span></code>
<m>> </m><code>Product <span class="comment">#or unit index in this case is : 0</span></code>
<m>$ </m><code><span class="info">[ProductController] created successfully</span></code>
<m>$ </m><code>_</code>
</pre>
</div>

Controller :
```php
namespace App\Laraset\units\Product\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function index(Request $request)
    {
        //
    }
}
```