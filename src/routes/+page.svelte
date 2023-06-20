<script>
	let Running = 'Type Something'
  </script>

<div class="navbar sticky top-0 z-10 bg-[#212121]">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl text-white">REBOARD</a>
	</div>
	<div class="flex-none gap-2">
		<div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
		</div>
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<a class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>
<div class="px-12 py-12 bg-slate-100 min-h-screen space-y-10 Cardinput">
	<div class="text-3xl text-gray-800">Dashboard General</div>
	<div class="grid grid-cols-3 gap-10 max-w-7xl">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-warning">OUT</h2>
				<p>20</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-success">COMPLETE</h2>
				<p>10</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-error">NOT RETURN</h2>
				<p>10</p>
				<div class="card-actions justify-end" />
			</div>
		</div>
	</div>
	<div class="text-3xl text-gray-800">Dashboard Something</div>
	<div class="grid grid-cols-3 gap-10 max-w-7xl">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-warning">OUT</h2>
				<p>10</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-success">COMPLETE</h2>
				<p>10</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-error">NOT RETURN</h2>
				<p>10</p>
				<div class="card-actions justify-end" />
			</div>
		</div>
	</div>
	<div class="text-3xl text-gray-800">Dashboard Consumable</div>
	<div class="grid grid-cols-3 gap-10 max-w-7xl">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-warning">OUT</h2>
				<p>10</p>
				<div class="card-actions justify-end" />
			</div>
		</div>

		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-success">COMPLETE</h2>
				<p>10</p>
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
							<th>Me</th>
							<th>You</th>
							<th>My <br /> Self</th>
							<th>Fox</th>
							<th>Engineering</th>
							<th>Yae <br /> Miko Team</th>
							<th>Shutdown</th>
							<th>Kill Streak</th>
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
							<th>B1</th>
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
							<th>B2</th>
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
							<th>C1</th>
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
							<th>C2</th>
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
							<th>C3</th>
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
