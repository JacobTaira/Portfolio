import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig({
    site: 'https://JacobTaira.github.io',
    base: 'Portfolio', // you want to actually publish this specific repo, not the account (jacobtaira.github.io)
    /*
    
    
    If the base is set to 'my-repo', and you have an image with a relative URL /images/photo.jpg, 
    Astro will automatically prepend the base, resulting in the URL /my-repo/images/photo.jpg.
    */
});
