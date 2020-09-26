<?php
    // This is the email separator line
    $separator = "<tr><td colspan=\"2\" style=\"margin: 10px 0; height: 10px; font-size: 0.1px; border-bottom: 1px solid [email:emailBackground];\">&nbsp;</td></tr>";
?>
<table border="0" width="100%" style="[email:contentStyle]">
    <tr>
        <td style="[email:contentFontFamily] text-align: center; font-weight: bold;font-size: 1.11em">
            <?php echo $l10n->get('cart_order_no') . ": " . $orderData['order']['id'] ?>
        </td>
    </tr>
    <!-- Opening Message -->
    <tr><td style="[email:contentFontFamily]"><?php echo $opening ?></td></tr>
    <?php echo $separator ?>
    <!-- Order Data -->
    <tr>
        <td style="[email:contentFontFamily] padding: 5px 0 0 0;">
            <h3 style="font-size: 1.11em"><?php echo $l10n->get('cart_product_list') ?></h3>
            <table cellpadding="5" width="100%" style="[email:contentStyle] border-collapse: collapse;">
                <tr bgcolor="[email:bodyBackgroundOdd]">
                    <td style="[email:contentFontFamily] border: 1px solid [email:bodyBackgroundBorder]; color: [email:bodyTextColorOdd]">
                        <b><?php echo $l10n->get("cart_name") ?></b>
                    </td>
                    <td style="[email:contentFontFamily] border: 1px solid [email:bodyBackgroundBorder]; color: [email:bodyTextColorOdd]">
                        <b><?php echo $l10n->get("cart_qty") ?></b>
                    </td>
                </tr>    
                <?php $i = 0; foreach ($products as $value): ?>
                    <?php $url = $baseurl . "cart/x5cart.php?download=" . $value['download_hash']; ?>
                    <tr valign="top" style="[email:contentFontFamily] vertical-align: top"<?php ($i%2 ? " bgcolor=\"#EEEEEE\"" : "") ?>>
                        <td style="[email:contentFontFamily] border: 1px solid [email:bodyBackgroundBorder];"><?php echo $value["name"] ?><br /><?php echo $value["description"] ?></td>
                        <td style="[email:contentFontFamily] border: 1px solid [email:bodyBackgroundBorder]; text-align: right;"><?php echo $value["quantity"] ?></td>
                        <?php if (isset($value['image'])): ?>
                            <td style="[email:contentFontFamily] border: 1px solid [email:bodyBackgroundBorder];"><br /><img src="<?php echo $baseurl . $value['image'] ?>" alt="<?php echo $value['name'] ?>" style="max-width: 250px;" /></td>
                        <?php endif; ?>
                    </tr>
                    <?php $i++; ?>
                <?php endforeach; ?>
            </table>
        </td>
    </tr>
    <!-- Closing message -->
    <?php echo $separator ?>
    <tr><td style="[email:contentFontFamily] padding: 5px 0 0 0;"><?php echo $closing ?></td></tr>
</table>
