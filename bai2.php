<?php
for ($i = 1; $i <= 100; $i++) {

    if ($i % 2 == 0) {
        // số chẵn
        echo "<span style='color:red; font-weight:bold;'>$i</span> ";
    } else {
        // số lẻ
        echo "<span style='color:green; font-weight:bold; font-style:italic;'>$i</span> ";
    }

}
?>
