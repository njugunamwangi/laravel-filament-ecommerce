<div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Shop by Categories</h2>

        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <!-- category - start -->
            @foreach($categories as $category)
            <div>
                <a href="{{ $category->slug }}" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                    @if ($category->hasMedia('categories'))
                        <img
                            src="{{ $category->getFirstMedia('categories')->getUrl() }}"
                            loading="lazy"
                            alt="{{ $category->category }}"
                            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    @endif

                    <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                        <span class="text-lg font-bold text-gray-800 lg:text-xl">{{ $category->category }}</span>
                    </div>
                </a>
            </div>
            @endforeach
            <!-- category - end -->
        </div>
    </div>
</div>
