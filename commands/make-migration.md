# Make Migration

### Command
```bash
php artisan laraset:migration [name]
```

<div class="console-containter">
    Example :
<pre class="console-code">
<m>$ </m><code>php artisan <span class="code">laraset:migration</span> products</code>
<m>$ </m><code class="question"><span class="success">For Which Unit ?</span></code>
<m>  </m><code><span>[0] Product</span></code>
<m>> </m><code>Product <span class="comment">#or unit index in this case is : 0</span></code>
<m>$ </m><code><span class="info">[CreateProductsTable] migration created successfully</span></code>
<m>$ </m><code>_</code>
</pre>
</div>

```php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->rememberToken();
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
```
:::tip Migration File Location
each unit Has his own Migration files within `Laraset/units/Product/Database/Migrations` directory
:::
