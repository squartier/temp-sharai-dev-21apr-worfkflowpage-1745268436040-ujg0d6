const [loadingMore, setLoadingMore] = useState(false);
const [hasMore, setHasMore] = useState(true);
const [page, setPage] = useState(0);
const [refreshTrigger, setRefreshTrigger] = useState(0);
const LIMIT = 15;

useEffect(() => {
  fetchWorkflows();
}, []);

useEffect(() => {
  if (selectedWorkflow) {
    fetchConversations();
  }
}, [selectedWorkflow, searchQuery, refreshTrigger]);

      onClick={() => {
        onNewChat();
        setRefreshTrigger(prev => prev + 1); // Trigger refresh
        const inputElement = document.querySelector<HTMLInputElement>('input[type="text"][placeholder="Type your message..."]');
        if (inputElement) {
          inputElement.focus();
        }
      }}