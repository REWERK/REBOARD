<script>
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let Running = 'Type Something'
	/** @type {import('./$types').PageData} */
	export let data;
	console.log (data)
	onMount (()=>{
		setTimeout (()=>{
			window.location.reload()
		},120000)
	})
  </script>

<div class="navbar sticky top-0 z-10 bg-[#212121]">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl text-white">REBOARD</a>
	</div>
	<div class="flex-none gap-2">
		<a class="btn btn-ghost normal-case text-xl text-yellow-400">REWERK</a>
	</div>
</div>
<div class="px-12 py-12 bg-slate-100 min-h-screen space-y-10 Cardinput">
	<div class="text-3xl text-gray-800">Dashboard General</div>
	<div class="grid grid-cols-3 gap-10 max-w-7xl">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-warning">REQUEST</h2>
				<p>{data.total}</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-success">DONE</h2>
				<p>{data.total2}</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-error">PREPARING</h2>
				<p>{data.total-data.total2}</p>
				<div class="card-actions justify-end" />
			</div>
		</div>
	</div>
	<div class="text-3xl text-gray-800">Dashboard QR</div>
	<div class="grid grid-cols-3 gap-10 max-w-7xl">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-warning">WITHDRAW</h2>
				<p>{data.total4}</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-success">RETURN</h2>
				<p>{data.total5}</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-error">PENDING RETURN</h2>
				<p>{data.total5}</p>
				<div class="card-actions justify-end" />
			</div>
		</div>
	
	</div>
	<div class="text-3xl text-gray-800">Table Overview</div>
	<div class="card w-full bg-base-100 shadow-xl">
		<div class="card-body">
			<div class="overflow-x-auto">
				<table class="table Headborder">
					<!-- head -->
					<thead class="Headborder">
						<tr class="bg-[#6EBE49] text-white">
							<th>Zone</th>
							<th>Total</th>
							<th>Active<br /> (ALL-Shutdown)</th>
							<th>DOWN</th>
							<th>Fixing</th>
							<th>Broke<br /> (Team Reparing)</th>
							<th>Shutdown Repair</th>
							<th>WAITING</th>
						</tr>
					</thead>
					<tbody class="Subborder">
						<!-- row 1 -->
						<tr>
							<th>A1</th>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
						</tr>
						<!-- row 2 -->
						<tr>
							<th>A2</th>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
						</tr>
						<!-- row 3 -->
						<tr>
							<th>A3</th>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
						</tr>
						<!-- row 4 -->
						<tr>
							<th>A4</th>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
						</tr>
						<!-- row 5 -->
						<tr>
							<th>B1</th>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
						</tr>
						<!-- row 6 -->
						<tr>
							<th>B2</th>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
						</tr>
						<!-- row 7 -->
						<tr>
							<th>B3</th>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
							<td>-</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div>
	<div class="tooltip w-full" data-tip="Type Something">
		<marquee contenteditable="true" class="pt-3 input input-bordered w-full shadow-xl" on:input={({ target: { textContent } }) => {
			Running = textContent
		}}>
		  {Running}
		</marquee>
	</div>
	<div>	<button class="btn btn-outline bg-white btn-success">Submit</button>
		<button class="btn btn-outline bg-white btn-error" on:click={() => { Running = "Type Something" }}>Clear</button>
	</div>

	</div>
</div>
