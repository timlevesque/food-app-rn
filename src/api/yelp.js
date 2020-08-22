import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer NgkpSia7M2iR3uaGT7scn30eWIATatcko9agRZmInhQzWHUJPL4hTOElsGGxaRbTq0O2d8lzMDWxOZ39JXwYnWu-I6DAsNUbQ4AbDR3p_y_cX0nPUHEyeVJWzWM7X3Yx'
    }
});