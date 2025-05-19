import { ref } from "vue";
import { OAutocomplete, type OptionsProp } from '@oruga-ui/oruga-next'

const options = ref<OptionsProp>([])

// Fetch users from the server
export const fetchUsers = async () => {
  try {
    const response = await fetch('/api/users')
    const users = await response.json()
    options.value = users.map((user: any) => ({
      label: user.name,
      value: user.id
    }))
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

// Call fetchUsers when component is mounted
fetchUsers()

export default {
  components: {
    OAutocomplete
  },
  setup() {
    return {
      options
    }
  }
};
