<template>
    <div>
        <p>Sign-In Options:</p>
        <button @click="signIn('auth0')">Auth0</button>
        <button @click="signOut()">Sign Out</button>
        {{ data }}
        {{ status }}
        {{ session }}
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: "/protected" },
});

const { signIn, signOut, data, status } = useAuth();
</script>

<style scoped></style>
