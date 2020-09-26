<?php
/**
 * Server Test Class
 * @access public
 */
class imTest {
    const PHP_MIN_VERSION = '7.1.0';

    /**
     * Utility that combine a series of paths
     * @method pathCombine
     * @param  {array}  $paths The array with the elements of the path
     * @return {string} The path created combining the elements of the array
     */
    public static function testPathCombine($paths = array())
    {
        $s = array();
        foreach ($paths as $path) {
            if (strlen($path)) {
                $s[] = trim($path, "/\\ ");
            }
        }
        return implode("/", $s);
    }

    /*
     * Session check
     */
    public static function session_test()
    {
        if (!isset($_SESSION))
            return false;
        $_SESSION['imAdmin_test'] = "test_message";
        return ($_SESSION['imAdmin_test'] == "test_message");
    }

    /*
     * Writable files check
     */
    public static function writable_folder_test($dir)
    {
        if (!file_exists($dir) && $dir != "" && $dir != "./.")
            @mkdir($dir, 0777, true);

        $fp = @fopen(imTest::testPathCombine(array($dir, "imAdmin_test_file")), "w");
        if (!$fp)
            return false;
        if (@fwrite($fp, "test") === false)
            return false;
        @fclose($fp);
        if (!@file_exists(imTest::testPathCombine(array($dir, "imAdmin_test_file"))))
            return false;
        @unlink(imTest::testPathCombine(array($dir, "imAdmin_test_file")));
        return true;
    }

    /*
     * PHP Version check
     */
    public static function php_version_test()
    {
        if (!function_exists("version_compare") || version_compare(PHP_VERSION, self::PHP_MIN_VERSION) < 0)
            return false;
        return true;
    }

    /*
     * MySQL Connection check
     */
    public static function mysql_test($db)
    {
        if (!$db->testConnection())
            return false;
        $db->closeConnection();
        return true;
    }

}
// End of file

