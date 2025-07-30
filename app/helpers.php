<?php

function wrapText($text, $maxLength) {
    if (is_string($text) && strlen($text) > $maxLength) {
        $truncatedText = substr($text, 0, $maxLength) . '...';
        return $truncatedText;
    }
    return $text;
}

