export const useLoading = () => {
  const loading = ref(true);
  const loadingTitle = ref("Loading...");
  const hideLoading = () => (loading.value = false);
  return {
    loading,
    loadingTitle,
    hideLoading
  };
};
