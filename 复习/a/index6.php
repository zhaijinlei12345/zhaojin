<?php
 $age=$_GET['age']
 echo $age;

?>
<script>
 var age = <?php  echo $age; ?>;   
  top.fn(age);
</script>