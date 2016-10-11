<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8ae724a0ffae29ee13f38c77dd20e7e6
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
            $loader->prefixLengthsPsr4 = ComposerStaticInit8ae724a0ffae29ee13f38c77dd20e7e6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8ae724a0ffae29ee13f38c77dd20e7e6::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
