<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Expand at sm</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Departamentos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/create">Crear departamento</router-link>
                        </li>
                    </ul>
                    <form role="search">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "MenuComponent",
    
}
</script>
<style></style>