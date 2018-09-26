import _ from 'lodash';
import {getField, updateField} from "vuex-map-fields";

const UPDATE_FILTER_PROJECTS = "UPDATE_FILTER_PROJECTS";
const UPDATE_SELECTED_TAGS = "UPDATE_SELECTED_TAGS";
const CLEAR_SELECTED_TAGS = "CLEAR_SELECTED_TAGS";

const projects_init = [
  {
    name: 'Project X',
    description: 'Project X description',
    image: 'project_x.png',
    date: '2018-10-06T18:00:00.000Z',
    tags: ['design', 'development'],
    link: ''
  },
  {
    name: 'Lessons Dashboard',
    description: 'Design for courses platfom',
    image: 'desktop_hd.png',
    date: '2018-06-28T18:00:00.000Z',
    tags: ['design', 'development'],
    link: ''
  },
  {
    name: 'Terhi Lesson',
    description: 'Design for courses platfom',
    image: 'terhi_next_lesson.png',
    date: '2018-06-06T18:00:00.000Z',
    tags: ['design', 'development'],
    link: ''
  },
  {
    name: 'Schedule',
    description: 'Schedule description',
    image: 'Schedule.png',
    date: '2018-03-06T18:00:00.000Z',
    tags: ['design', 'development'],
    link: 'projects/project/4'
  },
  {
    name: 'NikiFilm',
    description: 'Photographer portfolio',
    image: 'NikiFilm.png',
    date: '2017-12-06T18:00:00.000Z',
    tags: ['design', 'development', 'portfolio'],
    link: ''
  },
  {
    name: 'Vendor Portal',
    description: 'Vendor Portal description',
    image: 'VendorPortal.png',
    date: '2017-03-06T18:00:00.000Z',
    tags: ['development'],
    link: ''
  },
  {
    name: 'TicketBird',
    description: 'TicketBird description',
    image: 'agentConcept.png',
    date: '2017-10-06T18:00:00.000Z',
    tags: ['widget', 'dashboard'],
    link: ''
  },
  // { name: 'Project Name',
  //   description: 'Project description',
  //   image: 'desktop_hd.png',
  //   date: '2017-06-06T18:00:00.000Z',
  //   link: 'projects/project/4'
  // },
];

const state = {
  projects: projects_init,
  filtered_projects: projects_init,
  selected_tags: []
};

// getters
const getters = {
  load_projects: state => {
    return state.projects;
  },
  load_filtered_projects: state => {
    return state.filtered_projects;
  },
  get_selected_tags: state => {
    return getField(state);
  },
};

// actions
const actions = {
  clear_filters({commit}) {
    commit(CLEAR_SELECTED_TAGS);
  }
};

// mutations
const mutations = {
  update_selected_tags(state, field) {
    updateField(state, field);
    if (!state.selected_tags.length) {
      state.filtered_projects = state.projects;
      return;
    }
    state.filtered_projects = _.filter(state.projects, project => {
      return _.intersection(project.tags, state.selected_tags).length
    });
  },
  [CLEAR_SELECTED_TAGS](state) {
    _.set(state, 'selected_tags', []);
    state.filtered_projects = state.projects;
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};