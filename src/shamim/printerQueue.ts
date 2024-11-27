interface PrinterQueue {
	id: string;
	priority: number;
	size: number;
}

type SortedQueue = PrinterQueue["id"][];

const processPrinterQueue = (queues: PrinterQueue[]): SortedQueue => {
	const sortedQueue = queues.slice().sort((a, b) => {
		// Sort by priority descending
		if (b.priority !== a.priority) {
			return b.priority - a.priority;
		}

		// Sort by size ascending
		if (a.size !== b.size) {
			return a.size - b.size;
		}

		return 0;
	});

	return sortedQueue.map((queue) => queue.id);
};

// export default processPrinterQueue([
// 	{ id: "T1", priority: 3, size: 300 },
// 	{ id: "T2", priority: 3, size: 200 },
// 	{ id: "T3", priority: 5, size: 400 },
// ]);

// export default processPrinterQueue([
// 	{ id: "A1", priority: 4, size: 100 },
// 	{ id: "A2", priority: 4, size: 100 },
// 	{ id: "A3", priority: 4, size: 100 },
// ]);
