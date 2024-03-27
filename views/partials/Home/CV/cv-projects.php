<article id="projects" class="">
    <h3>Travaux</h3>
    <div class="grid">
        <?php $lastDate = null; ?>
        <?php foreach ($projects as $project) : ?>
            <?php
            $currentDate = dateFormat($project);
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

<h4><a href="<?= $project['link'] ?>" class="link-out"><?= $project['title'] ?></a></h4>
<h5><?= $project['subtitle'] ?></h5>
<p><?= $project['desc'] ?></p>
<p>Objectifs : <?= $project['objectif'] ?></p>
<?php $lastDate = $currentDate; ?>
<?php endforeach ?>
</div>
</article>