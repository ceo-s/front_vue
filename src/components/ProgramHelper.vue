<template>
    <div class="helper">
        <div class="content">
            <h1>Здесь типо пиздатый заголовок. Типо чёткий подход - четкие результаты.</h1>
            <h4>А здесь текстовое описание того что на видео, с конкретикой. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At architecto delectus ipsa numquam doloremque voluptatibus accusantium ipsam enim amet fugiat, omnis quos repudiandae tempora explicabo temporibus unde. Commodi deserunt iusto rerum perferendis repudiandae architecto voluptate assumenda beatae itaque porro recusandae dicta, iure exercitationem voluptatem soluta sint numquam dolorum non repellendus. Tempore voluptate qui voluptatem sit.</h4>
        </div>
        <div class="media">
            <img src="../assets/logo.png">
            <p>Здесь, вместо картинки гифка или разовый видос с мини туториалром типо нажми клиентыы нажми прогу</p>
        </div>
    </div>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>
.helper {
    width: 90%;
    height: 60vh;
    // background: #4444446b;
    border: 3px solid #000;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
}
.content {
    padding: 10px;
    height: fit-content;
    // height: 40vh;
    width: 55%;
    // background: #333;
}
.media {
    // height: 45%;
    // width: 45%;
    // size: fit-content fit-content;
    // background: #000;
    display: flex;
    // background-image: url("../assets/logo.png");
}
</style>