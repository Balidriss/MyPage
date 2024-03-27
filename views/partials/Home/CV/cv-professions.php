                <article id="professions" class="">
                    <h3>Professions</h3>
                    <div class="grid">
                        <?php $lastDate = null; ?>
                        <?php foreach ($professions as $profession) : ?>
                            <?php
                            $currentDate = dateFormat($profession);
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

                <h4><?= $profession['title'] ?></h4>
                <p><?= $profession['desc'] ?></p>
                <?php $lastDate = $currentDate; ?>
                <?php endforeach ?>
                </div>
                </article>