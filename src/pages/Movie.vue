<template>
  <b-container>
      <!-- <br>
      <h1 class="text-center">Дэдпул 2</h1>
      <br>
      <b-row>
          <b-col sm="12" md="6">
              <p><b>Продолжительность: </b> 120 минут (2:00)</p>
              <p><b>Жанр: </b> фантастика, боевик, комедия</p>
              <p><b>Режиссер: </b> Дэвид Литч</p>
              <p><b>Страна: </b>США</p>
              <p><b>Оригинальное название: </b> Deadpool 2</p>
              <p><b>Описание: </b> <br> 
                Во исполнение своей мечты и выброса адреналина Дэдпул снова ищет приключений, вооруженный острым ножом и нестандартным чувством юмора. Такому мощному оружию не могут противостоять ни ниндзя, ни якудза, ни даже свора буйных сексуально озабоченных собак. В пылу сражений, где кровь смешивается с пошлыми шутками, даже такой циник как Дэдпул начинает задумываться о семейных ценностях и дружбе. Впрочем, эта шальная мысль вряд ли сможет изменить его натуру.
                </p>
              <p><b>Возрастное ограничение: </b> 18+</p>
          </b-col>
          <b-col sm="12" md="6">
                <b-row align-h="end">
                    <b-img
                        height="400"
                        src="https://www.kinopoisk.ru/images/film_big/961715.jpg"/>
                </b-row>
          </b-col>
          <b-col sm="12">
            <br>
              <b-row align-h="center">

                <iframe width="854" height="480" src="https://www.youtube.com/embed/xFvOZAepx4I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </b-row>
          </b-col>
      </b-row>
      <br><br> -->
    <br>
    <section>    
        <b-img 
            src="https://s3.amazonaws.com/ffe-ugc/intlportal2/dev-temp/en-US/__5af9ceb66442e.jpg"
            fluid/>
        <br>
        <br>
    </section>
    <section>
        <b-row>
            <b-col sm="12" md="6">
                <p><b>Продолжительность: </b> 120 минут (2:00)</p>
                <p><b>Жанр: </b> фантастика, боевик, комедия</p>
                <p><b>Режиссер: </b> Дэвид Литч</p>
                <p><b>Страна: </b>США</p>
                <p><b>Оригинальное название: </b> Deadpool 2</p>
                <p><b>Описание: </b> <br> 
                    Во исполнение своей мечты и выброса адреналина Дэдпул снова ищет приключений, вооруженный острым ножом и нестандартным чувством юмора. Такому мощному оружию не могут противостоять ни ниндзя, ни якудза, ни даже свора буйных сексуально озабоченных собак. В пылу сражений, где кровь смешивается с пошлыми шутками, даже такой циник как Дэдпул начинает задумываться о семейных ценностях и дружбе. Впрочем, эта шальная мысль вряд ли сможет изменить его натуру.
                </p>
                <p><b>Возрастное ограничение: </b> 18+</p>
            </b-col>
            <b-col sm="12" md="6">
                <b-row >
                    <b-col>
                        <h2 class="text-center">Рейтинги</h2>
                        <br>
                        <b-row>
                            <b-col>
                                <p><b>Кинопоиск: </b> 8.7</p>
                            </b-col>
                            <b-col>
                                <p><b>Кинопоиск: </b> 8.7</p>
                            </b-col>
                            <b-col>
                                <p><b>Кинопоиск: </b> 8.7</p>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="12">
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/xFvOZAepx4I" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </b-col>
                </b-row>
            </b-col>
            <b-col sm="12">
                <b-tabs>
                    <b-tab title="Ближайшие сеансы">
                        <b-card>
                            <b-row>
                                <b-col sm="3">
                                    <p v-for="item in 4" :key="item">Кинотеатр {{item}}</p>
                                </b-col>
                                <b-col sm="9">
                                    <b-row v-for="item in 4" :key="item">
                                        <b-col sm="2" v-for="item in 6" :key="item">
                                            <p class="text-center" style="border: solid 2px black; cursor: pointer;">12:30</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-tab>
                    <b-tab title="Отзывы пользователей">
                        <b-row>
                            <b-col sm="12" md="6"
                                v-for="item in 5" :key="item">
                                <b-card>
                                    <!-- title="Имя пользователя"> -->
                                    <p class="h4">Имя пользователя</p>
                                    <p class="card-text">
                                        <b>Оценка: </b> 7/10
                                    </p>
                                    <p class="card-text">
                                        Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание 
                                    </p>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-tab>
                </b-tabs>
            </b-col>
        </b-row>
    </section>

  </b-container>
</template>

<script>
export default {};
</script>

<style>

</style>
