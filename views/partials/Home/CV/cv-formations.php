<article id="formations" class="show">
    <h3>Formations</h3>
    <div class="grid">
        <?php $lastDate = null; ?>
        <?php foreach ($formations as $formation) : ?>
            <?php
            $currentDate = dateFormat($formation);
            $isNewDate = $currentDate !== $lastDate;
            ?>
            <?php if ($isNewDate) : ?>
                <?php if ($lastDate !== null) : ?>
    </div>
<?php endif ?>
<div class="date">
    <?= $currentDate ?>
</div>
<div class="timeline">
    <span class="marker"></span>
</div>
<div class="desc">
<?php endif ?>
<?php if (isset($formation['title'])) : ?>

    <h4><?= $formation['title'] ?></h4>
<?php endif ?>

<?php if (isset($formation['place'])) : ?>

    <h5></br><?= $formation['place'] ?></h5>
<?php endif ?>
<p><?= $formation['desc'] ?></p>
<?php $lastDate = $currentDate; ?>
<?php endforeach ?>
</div>
</article>