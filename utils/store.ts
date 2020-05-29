import database from "../database.json";

class Store {
  public blogs = database.blogs;
  constructor() {}
  getTags() {
    const tags = this.blogs.map((item) => item.tags).flat();
    return [...new Set(tags)];
  }
  getBlogsByTag(tag: string) {
    return this.blogs.filter((item) => item.tags.includes(tag));
  }
  getBlogs() {
    return this.blogs;
  }
  getRandomBlog() {
    const index = Math.floor(Math.random() * this.blogs.length);
    return this.blogs[index];
  }
}

export const store = new Store();
