<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0da5062e9fe52d7bf5d5fb2d8aa58e7e
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Mimizuku\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Mimizuku\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0da5062e9fe52d7bf5d5fb2d8aa58e7e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0da5062e9fe52d7bf5d5fb2d8aa58e7e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
