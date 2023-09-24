<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Wizard;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Product Management';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                    ->schema([
                        Wizard::make([
                            Wizard\Step::make('Product Info')
                                ->columnSpanFull()
                                ->description('Basic product information')
                                ->icon('heroicon-o-banknotes')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('products')
                                        ->directory('products')
                                        ->imageEditor()
                                        ->preserveFilenames()
                                        ->collection('products'),
                                    Forms\Components\TextInput::make('product')
                                        ->required()
                                        ->maxLength(2000),
                                    Forms\Components\RichEditor::make('description')
                                        ->columnSpanFull(),
                                    Grid::make(2)
                                        ->schema([
                                            Forms\Components\TextInput::make('list_price')
                                                ->required()
                                                ->prefix('Kes')
                                                ->numeric(),
                                            Forms\Components\TextInput::make('retail_price')
                                                ->required()
                                                ->prefix('Kes')
                                                ->numeric(),
                                        ]),
                                    Grid::make(2)
                                        ->schema([
                                            Forms\Components\TextInput::make('model_name')
                                                ->maxLength(2000),
                                            Forms\Components\TextInput::make('model_number')
                                                ->maxLength(2000),
                                        ]),
                                    Grid::make(1)
                                        ->schema([
                                            Forms\Components\Toggle::make('status')
                                                ->required(),
                                        ]),
                                    Grid::make(2)
                                        ->schema([
                                            Forms\Components\TextInput::make('meta_title')
                                                ->maxLength(2000),
                                            Forms\Components\TextInput::make('meta_description')
                                                ->maxLength(2000),
                                        ])
                                ]),
                            Wizard\Step::make('Brands, Tags & Categories')
                                ->description('Add product\'s brands, tags and categories')
                                ->icon('heroicon-o-tag')
                                ->schema([
                                    Grid::make(3)
                                        ->schema([
                                            Forms\Components\Select::make('brands')
                                                ->relationship('brands', 'brand')
                                                ->preload()
                                                ->searchable(),
                                            Forms\Components\CheckboxList::make('categories')
                                                ->relationship('categories', 'category')
                                                ->searchable(),
                                            Forms\Components\CheckboxList::make('tags')
                                                ->relationship('tags', 'tag')
                                                ->searchable(),
                                        ])
                                    ]),
                            Wizard\Step::make('Product Properties')
                                ->description('Add product properties')
                                ->icon('heroicon-o-adjustments-vertical')
                                ->schema([
                                    Forms\Components\Select::make('colors')
                                        ->relationship('colors', 'color')
                                        ->multiple()
                                        ->preload()
                                        ->searchable(),
                                    Forms\Components\RichEditor::make('warranty')
                                        ->columnSpanFull(),
                                    Grid::make(3)
                                        ->schema([
                                            Forms\Components\TextInput::make('length')
                                                ->required()
                                                ->numeric(),
                                            Forms\Components\TextInput::make('width')
                                                ->required()
                                                ->numeric(),
                                            Forms\Components\TextInput::make('height')
                                                ->required()
                                                ->numeric(),
                                            ]),
                                    Grid::make(2)
                                        ->schema([
                                            Forms\Components\TextInput::make('material')
                                                ->maxLength(255),
                                            Forms\Components\TextInput::make('weight')
                                                ->required()
                                                ->numeric(),])
                                ]),
                            Wizard\Step::make('Images')
                                ->description('Add product images')
                                ->icon('heroicon-o-photo')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('images')
                                        ->directory('images')
                                        ->imageEditor()
                                        ->multiple()
                                        ->preserveFilenames()
                                        ->collection('images'),
                                ])
                        ])
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                SpatieMediaLibraryImageColumn::make('products')
                    ->collection('products'),
                Tables\Columns\TextColumn::make('product')
                    ->searchable(),
                Tables\Columns\TextColumn::make('list_price')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('retail_price')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\ToggleColumn::make('status'),
                Tables\Columns\TextColumn::make('model_name')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('model_number')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('material')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('length')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('width')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('height')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('weight')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('createdBy.name')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('updatedBy.name')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('deletedBy.name')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('meta_title')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('meta_description')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
                SelectFilter::make('brands')
                    ->multiple()
                    ->relationship('brands', 'brand')
                    ->searchable()
                    ->preload(),
                SelectFilter::make('categories')
                    ->multiple()
                    ->relationship('categories', 'category')
                    ->searchable()
                    ->preload(),
                SelectFilter::make('colors')
                    ->multiple()
                    ->relationship('colors', 'color')
                    ->searchable()
                    ->preload(),
                SelectFilter::make('tags')
                    ->multiple()
                    ->relationship('tags', 'tag')
                    ->searchable()
                    ->preload(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'view' => Pages\ViewProduct::route('/{record}'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
