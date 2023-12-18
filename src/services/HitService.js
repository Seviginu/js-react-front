import api from "../http";

export default class HitService {
    static async hit(point) {
        return api.post('/hits/hit', point);
    }

    static async getHits() {
        return api.get(`/hits/all`);
    }
}