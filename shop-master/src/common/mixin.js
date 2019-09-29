import {
  debounce
} from './until'
import backtop from "../components/content/backtop/backtop";

export const itemlistenermixin = {
  data() {
    return {
      itemimglistener: null,
      newrefresh: null
    }
  },
  mounted() {
    this.newrefresh = debounce(this.$refs.scroll.refresh, 100);

    this.itemimglistener = () => {
      this.newrefresh()
    }
    this.$bus.$on('imageLoad', this.itemimglistener)
  },
}

export const backtopmixin = {
  components: {
    backtop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenbacktopshow(position) {
      this.isShowBackTop = -position.y > 1000 * 1;
    }
  },
}
