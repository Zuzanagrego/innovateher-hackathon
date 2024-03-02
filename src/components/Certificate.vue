<script setup>
const skills = ["Javascript", "Vue"];
</script>

<template>
    <div>
        <h1>List the certificates</h1>
    </div>

    <ul style="list-style: none;">
        <template v-for="skill in skills">
            <li class="certificate-button">
                <input type="b-button"
                    :value=skill>
            </li>
        </template>
    </ul>
</template>

<style>
.certificate-button {
    display: inline-block;    
    padding: 10px;
}
</style>