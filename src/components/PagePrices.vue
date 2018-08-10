<template>
  <main class="main">
    <section class="section prices-page">
      <div class="grid">
        <section-heading
          :sectionTitle="pageTitle"
          :sectionDescription="pageDescription"
        />
        <div class="grid__row">
          <table class="table col-xs-12">
            <thead class="table__head">
              <tr class="table__row">
                <th class="table__cell table__cell--header" v-for="columnName in tableHead" :key="columnName.id">
                  <span>
                    {{columnName}}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr class="table__row" v-for="itemPrice in prices" :key="itemPrice.id">
                <template v-for="item in itemPrice" v-if="item.colspan">
                  <td  class="table__cell" :colspan="item.colspan" valign="middle">
                    {{item.activity}}
                  </td>
                </template>
                <template v-for="item in itemPrice" v-else>
                  <td class="table__cell table__cell--body" valign="middle">
                    {{item.activity}}
                  </td>
                  <td class="table__cell table__cell--body" valign="middle">
                    {{item.price}}
                  </td>
                  <td class="table__cell table__cell--body" valign="middle">
                    {{item.description}}
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import sectionHeading from '@/components/Sections/TheSectionHeading';

export default {
  name: 'ContactsPage',
  components: {
    sectionHeading,
  },
  data () {
    return {
      pageTitle: 'Prices list',
      pageDescription: '',
      tableHead: ["Activity", "Price", "Description"],
      prices: [
        {priceItem:
          {activity: 'Work on the site completely', colspan: "3"}
        },
        {priceItem:
          {
            activity: 'Develop markup from scratch',
            price: '$10 per hour',
            description: 'Choosing technology stack, develop your stories from scratch'
          }
        },
        {priceItem: {
            activity: 'Implement full layout to an existing project',
            price: '$10 per hour',
            description: 'This means that you already have a working application and layouts from the designer, but it is not implemented'
          }
        },
        {priceItem: {
            activity: 'Implement redesign to an existing project',
            price: '$16 per hour',
            description: 'If you think that your website needs the new design and you want me to implement this, please at first check out my technology stack'
          }
        },
        {priceItem: {
            activity: 'Support for existing project',
            price: '$8 per hour',
            description: 'Fixing existing bugs or implement new features'
          }
        },
        {priceItem:
          {activity: 'Realization of single component', colspan: "3"}
        },
      ]
    }
  },
}

</script>

<style lang="sass" scoped>
  .table
    background: #fff
    table-layout: fixed
    &__head
      padding: 8px 0
    &__row
      &:nth-of-type(2n)
        background: darken(#fff, 3%)
    &__cell
      padding: 8px 16px
</style>
