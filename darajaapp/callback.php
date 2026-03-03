<?php

$data = file_get_contents('php://input');
file_put_contents('callback_log.json', $data . PHP_EOL, FILE_APPEND);

echo "Callback received";