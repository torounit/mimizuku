<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0640f6a32faf99d9769acb4067626b94
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
            $loader->prefixLengthsPsr4 = ComposerStaticInit0640f6a32faf99d9769acb4067626b94::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0640f6a32faf99d9769acb4067626b94::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
