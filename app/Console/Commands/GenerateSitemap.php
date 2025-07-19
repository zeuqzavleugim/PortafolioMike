<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        Sitemap::create()
            ->add(Url::create('/'))
            ->add(Url::create('/contacto'))
            ->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ Sitemap generado correctamente en public/sitemap.xml');
    }
}
